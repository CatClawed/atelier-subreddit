var flairs = [
    'aluche',
    'arnice',
    'astrid',
    'Awin',
    'Ayesha',
    'ayesha2',
    'barrel',
    'cass',
    'cecilia',
    'cordelia',
    'cordelia2',
    'corneria',
    'delta',
    'drossel',
    'earthes',
    'Edge',
    'Elie',
    'escha',
    'escha2',
    'esty',
    'Felt',
    'filly',
    'firis',
    'firis2',
    'gino',
    'gio',
    'gust',
    'hagelstatue',
    'hanna',
    'harol',
    'hinako',
    'hinako2',
    'homf',
    'homm',
    'homura',
    'iksel',
    'ilmeria',
    'ion',
    'Iris',
    'Jakuri',
    'Judie',
    'julio',
    'juris',
    'kald',
    'Katla',
    'keina',
    'keithgriff',
    'Klein',
    'leon',
    'liane',
    'lias',
    'Lilie',
    'linca',
    'linca2',
    'Linca3',
    'lionela',
    'lionela2',
    'Lita',
    'logy',
    'logy2',
    'lotte',
    'lotte2',
    'lucille',
    'Lydie',
    'Lydie2',
    'marc',
    'Marie',
    'marion',
    'melvia',
    'meruru',
    'meruru2',
    'Micie',
    'mimi',
    'mimi2',
    'miruca',
    'monika',
    'nio',
    'odelia',
    'oskar',
    'pamela',
    'pamela2',
    'pamela3',
    'pamela4',
    'plachta',
    'plachta2',
    'punitaro',
    'Raze',
    'regina',
    'revy',
    'reyfer',
    'rorona',
    'rorona2',
    'rorona3',
    'rorona4',
    'rufus',
    'Shurelia',
    'sophie',
    'sophie2',
    'stera',
    'stera2',
    'sterk',
    'Suelle',
    'Suelle2',
    'tantris',
    'tess',
    'threia',
    'totori',
    'totori2',
    'totori3',
    'Tyria',
    'Ulrika',
    'Vayne',
    'Viese',
    'Viorate',
    'wilbell',
    'wilbell2',

];

var submitFlair = function() {
    var newFlair = $('#empty-user-flair-template'),
	check        = newFlair.find('input[type="checkbox"]:first'),
    flairInput   = newFlair.find('input[type="text"]:last'),
    submitButton = newFlair.find('button[type="submit"]'),
    flair        = flairs.shift();

    flairInput.val(flair);
	check.click();
    submitButton.click();

    if (flairs.length > 0) {
        setTimeout(submitFlair, 700);
    }
};

submitFlair();