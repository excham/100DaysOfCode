<?php
class Core {

  public function __construct(){
    include dirname(__DIR__) . '/config.php';
    $this->config = $siteConfig;
  }

  public function __invoke($request, $response, $next) {

    $request = $request->withAttribute('config', $this->config);

    $response = $next($request, $response);

    return $response;
  }
}
