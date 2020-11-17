$(() => {

  // grab the button
  const $button = $('#add-new-number');

  // add a click handler
  $button.click(() => {

    // grab the input field
    const $input = $('#new-number');

    // gets it value
    const value = $input.val();

    // create an li with a text node of the value
    const $li = $('<li>').text(value);

    // grab the main-list
    const $mainList = $('#main-list');
    
    // append li to the list
    $mainList.append($li);

    // clear the input
    $input.val('').focus();

  });

});

$(document).ready(() => {

  console.log('did this work?');

  console.log(`hello ${name}`);

  const $h1 = $('h1');

  $h1.on('click', () => {
    console.log('h1 was clicked!');
  });

  $h1.click(() => {
    console.log('also clicked');
  });

  // const $mainList = $('#main-list');

  const $content = $('.content');
  const $mainList = $content.children().last();
  // console.log($mainList);

  const $li = $('<li>').text('Water').addClass('fun');

  // $mainList.append($li);
  $mainList.prepend($li);

  // const $li = $('<li>')
  // $li.text('Water')
  // $li.addClass('fun')

  // const $li = $('<li>Water</li>');

});
