<?php
// Boolean
$active = true;
$count = 44;
$name = 'Joe';

print ('Hello, my name is $name!');
print ('<br>');
print ("Hello, my name is $name!");

// Arrays
$numbers = array(3, 5, 4, 6, 7, 2, 3, 4);
$num2 = [4, 5, 6];
print ('<br>');
print_r($numbers);
print ('<br>');
print_r($num2);

// stdClass
$user = new stdClass;
$user->name = 'Teddy';
$user->age = 55;
print ('<br>');
print_r($user);

// command structures
if ($active) {
    print ('<br>user is active');
} else {
    print ('<br>user is inactive');
}

// loops
for ($i = 0; $i < count($numbers); $i++) {
    print ('<br>' . $numbers[$i]);
}

foreach ($user as $key => $value) {
    print ('<br>' . $key . ': ' . $value);
}