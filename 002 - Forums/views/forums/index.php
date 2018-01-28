<!DOCTYPE html>
<html>
  <?php include dirname(__DIR__) . '/template/head.php' ?>
  <body>
    <?php include dirname(__DIR__) . '/template/nav.php' ?>
    <div class="container">
      <br>
      <div class="columns">
        <div class="column is-3">
          <div class="card">
            <div class="card-content">
              <aside class="menu">
                <ul class="menu-list">
                  <li><a class="is-active">What's New</a></li>
                  <li><a>What's Hot</a></li>
                </ul>
                <p class="menu-label">
                  Official
                </p>
                <ul class="menu-list">
                  <li><a>News</a></li>
                  <li><a>Questions</a></li>
                </ul>
                <p class="menu-label">
                  Forums
                </p>
                <ul class="menu-list">
                  <li><a>Introduce Yourself</a></li>
                  <li>
                    <a>Games</a>
                    <ul>
                      <li><a>Team Fortress 2</a></li>
                      <li><a>Counter Strike</a></li>
                      <li><a>Minecraft</a></li>
                    </ul>
                    <li><a>Off Topic</a></li>
                  </li>
              </aside>
            </div>
          </div>
        </div>
        <div class="column is-9">
          <div class="card">
            <div class="card-content">
              <div class=" is-pulled-right">
                <a href="#" class="button is-text"></a>
                &nbsp;
                <a href="#" class="button is-success">New topic</a>
              </div>

              <h2 class="title is-4">What's New</h2>

              <div class="columns is-paddingless">
                <div class="column is-4">
                  <b>Topic Title</b>
                </div>
                <div class="column is-3">
                  <b>Started By</b>
                </div>
                <div class="column is-3">
                  <b>Latest Reply</b>
                </div>
                <div class="column is-1">
                  <b>Replies</b>
                </div>
                <div class="column is-1">
                  <b>Views</b>
                </div>
              </div>
              <?php for ($i=0; $i < 10; $i++) { ?>
              <div class="columns" style="height: 48px; margin-bottom: 20px;">
                <a href="/t/hello" class="column is-4">
                  This is my post!
                </a>
                <div class="column is-3" style="padding-top: 0px;">
                  <a href="/u/excham" class="display-block">
                    <img src="https://crafatar.com/avatars/excham?size=45" alt="exchams avatar" class="is-pulled-left" style="margin-right: 10px;">
                    excham
                  </a>
                  <a href="/t/hello" class="display-block">
                    <small style="display: block; margin-top: -3px; font-size: 12px;">3 days ago</small>
                  </a>
                </div>
                <div class="column is-3" style="padding-top: 0px;">
                  <a href="/u/excham" class="display-block">
                    <img src="https://crafatar.com/avatars/excham?size=45" alt="exchams avatar" class="is-pulled-left" style="margin-right: 10px;">
                    excham
                  </a>
                  <a href="/t/hello" class="display-block">
                    <small style="display: block; margin-top: -3px; font-size: 12px;">12 minutes ago</small>
                  </a>
                </div>
                <div class="column is-1">
                  3
                </div>
                <div class="column is-1">
                  19
                </div>
              </div>
              <?php } ?>
              <nav class="pagination is-centered is-small" role="navigation" aria-label="pagination">
                <a class="pagination-previous">Previous</a>
                <a class="pagination-next">Next page</a>
                <ul class="pagination-list">
                  <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
                  <li><span class="pagination-ellipsis">&hellip;</span></li>
                  <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
                  <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                  <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
                  <li><span class="pagination-ellipsis">&hellip;</span></li>
                  <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <?php include dirname(__DIR__) . '/template/footer.php' ?>
  </body>
  <?php include dirname(__DIR__) . '/template/scripts.php' ?>
</html>
