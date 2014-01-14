angular
  .module("app")
  .factory("apiService", [
    "$http",
    ($http) -> {
      client: $http.get("/api/bower"),
      server: $http.get("/api/package")
    }
  ])

angular
  .module("app")
  .factory("randomService", [
    "$http",
    ($http) -> $http.get("/api/random")
  ])

