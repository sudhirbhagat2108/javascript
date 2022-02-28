
//multiple of 2 and 5 from 1 to 100

let g = 0
for (let h = 1; h <= 100; h++) {

    if (h % 2 == 0 && h % 5 == 0) {
        g++
        console.log(h)

        if (g == 3) {
            break

        }

    }



}