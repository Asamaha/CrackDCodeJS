keypad_mapings = [
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
];

get_all_words([1, 2, 3]);



function get_all_words(pressed_buttons) {
    var letters = [];
    for (i = 0; i < pressed_buttons.length; i++) {
        letters.push(keypad_mapings[pressed_buttons[i]]);
    }

    var progress = 0;
    current_word = '';
    limit = pressed_buttons.length;
    found_words = [];

    var return_value = recursive_word_generator(letters, progress, current_word, limit, found_words);
    console.log(return_value);
}

function recursive_word_generator(letters, progress, current_word, limit, found_words) {

    // completed word, add to collection and return
    if (progress == limit) {
        found_words.push(current_word);
    } else {
        // make recursive call for each letter in current press
        for (var i = 0; i < letters[progress].length; i++) {
            var next_word = current_word + letters[progress][i];

            recursive_word_generator(letters, progress + 1, next_word, limit, found_words);
        }
    }

    return found_words
}