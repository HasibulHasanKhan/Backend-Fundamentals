// A buffer is a temporary storage for binary data, allowing efficient handling of large amounts of data without converting it into string .

// Buffer usecase :
// javascript by default doesn't support binary data handling .
// Buffers help process large data (reading files, handling network streams.)
// They allow efficient memory management.

const buffer1 = Buffer.alloc(12);
console.log(buffer1);

const buffer2 = Buffer.from([72, 101, 108, 108, 111]);
console.log(buffer2.toString());

const buffer3 = Buffer.from('The name of our country is Bangladesh', 'utf8');
console.log(buffer3.toString());
