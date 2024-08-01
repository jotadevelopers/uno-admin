export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data } = useAuth();
  
  if (data.value) {
    
    const ability = usePermissions();
    const abilities: any[] = [];
    //@ts-ignore
    data.value.user.abilities.forEach((rule: any) =>
        abilities.push({
          action: rule.action,
          subject: rule.subject,
        })
    );
    ability.update(abilities);
    if (to.meta.rules) {
      //@ts-ignore
      if (!ability.can(to.meta.rules.action, to.meta.rules.subject)) {
        throw createError({
          status: 403,
          message: "you don't have permission to access this resource",
        });
      }
    }
  }
  return true;
});
