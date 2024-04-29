export const detectRoute = (route: string, routesListRegX: string[]) => {
  const normalizedPath = route.slice(3) === '' ? '/' : route.slice(3);

  const flatRoute = normalizedPath.split('/').slice(1).join('/');

  return routesListRegX.some((currentRoute) => {
    const regex = new RegExp(currentRoute);
    return regex.test(flatRoute);
  });
};
