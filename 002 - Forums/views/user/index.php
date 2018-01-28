<!DOCTYPE html>
<html>
  <?php include dirname(__DIR__) . '/template/head.php' ?>
  <body>
    <?php include dirname(__DIR__) . '/template/nav.php' ?>
    <br>
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="columns">
            <div class="column is-2">
              <img src="https://crafatar.com/avatars/excham?size=180" alt="" class="is-pulled-left" style="margin-right: 10px;">
            </div>
            <div class="column is-10" style="padding-left: 0px;">
              <h2 class="title is-2" style="margin: 39px 0px;">
                excham
                <span class="subtitle is-5">Last online 6 hours ago</span>
              </h2>
              <div class="tabs">
                <ul>
                  <li <?= $page == 'feed'     ? 'class="is-active"' : "" ?>><a href="/u/excham/feed">excham's feed</a></li>
                  <li <?= $page == 'topics'   ? 'class="is-active"' : "" ?>><a href="/u/excham/topics">Topics</a></li>
                  <li <?= $page == 'replies'  ? 'class="is-active"' : "" ?>><a href="/u/excham/replies">Replies</a></li>
                  <li <?= $page == 'about'    ? 'class="is-active"' : "" ?>><a href="/u/excham/about">About</a></li>
                </ul>
                <ul class="is-right">
                  <li><a href="/u/excham/feed">Send Message</a></li>
                  <li><a href="/u/excham/topics">Report</a></li>
                </ul>
              </div>
              <?php include $page . '.php'; ?>
            </div>
          </div>
          </div>
      </div>
    </div>
    <?php include dirname(__DIR__) . '/template/footer.php' ?>
  </body>
  <?php include dirname(__DIR__) . '/template/scripts.php' ?>
</html>
