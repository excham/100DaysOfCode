<?php

$routes = array(
  'index.php',
  'forums.php',
  'user.php'
);

$dirname = dirname(__DIR__);

foreach ($routes as $route) {
  include "$dirname/routes/$route";
}
