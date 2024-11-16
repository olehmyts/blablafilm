export const baseURL = 'blablafilm';
class Routes {
  public home = baseURL + '/';
  public about = baseURL + '/about';
  public films = baseURL + '/films';
  public movieDetail = baseURL + '/films/:id';
}

export const routes = new Routes();