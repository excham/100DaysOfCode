<?php

$app->get('/u/{username}[/{page}]', function ($request, $response, $args) {

  $pages = [
    'feed',
    'topics',
    'replies',
    'about'
  ];

  if(isset($args['page']) && in_array($args['page'], $pages)){
    $page = $args['page'];
  }else{
    $page = 'feed';
  }

  return $this->view->render($response, 'user/index.php', [
      'site' => $request->getAttribute('config'),
      'page' => $page
  ]);
});

?>
