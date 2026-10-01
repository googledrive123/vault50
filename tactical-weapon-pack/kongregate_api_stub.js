/* Kongregate API stub: the game runs as a guest, stats/shop calls do nothing */
(function () {
  var noop = function () {};
  function deep() {
    var f = function () { return undefined; };
    return typeof Proxy === 'undefined' ? {} : new Proxy(f, {
      get: function (t, k) {
        if (k === 'then') return undefined;
        if (k === 'isGuest') return function () { return true; };
        if (k === 'getUsername') return function () { return 'Guest'; };
        if (k === 'getUserId' || k === 'getUserID') return function () { return 0; };
        if (k === 'getGameAuthToken') return function () { return ''; };
        return deep();
      },
      apply: function () { return undefined; }
    });
  }
  var api = deep();
  window.kongregateAPI = {
    loadAPI: function (cb) { if (typeof cb === 'function') setTimeout(cb, 0); },
    getAPI: function () { return api; }
  };
  window.kongregate = window.kongregate || null;
})();
