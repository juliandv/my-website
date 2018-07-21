/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

$(".j-red").delay(400).animate({ opacity: 1 }, 500);
$(".j-blue").delay(1600).animate({ opacity: 1 }, 500);
$(".bioDetails").delay(2600).animate({ opacity: 1 }, 1000);

    setTimeout(function() {
        document.getElementsByTagName('title')[0].innerHTML = 'Julian de Villiers | Prod. Design';
    }, 1200);

console.log(`
█▀█░██░█▀█░█▀░██
█░█░█■░█▀█░█░░█➨
█▀▀░█▄░█░█░█▄░█▄
&
╔╗
║║╔═╦╦╦═╗
║╚╣║║║║╩╣
╚═╩═╩═╩═╝
Thanks for stopping by!`);
