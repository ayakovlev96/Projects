//snake proj
const field = [
  "ooo------Y--AND------",
  "-----EXY--A--N---D--E",
  "-X-----Y--A-N---D----",
  "------EXY----A---N---",
  "--DE--X---------YA---",
  "-----ND---EXY--AN--D-",
  "----E-----X-Y----A--N",
  "D-----E-XY---AN---D--",
  "E--------------------",
  "-------X---Y------A-N",
  "----D-EX----------YA-",
  "--N-DEX--Y-A--N-----D",
  "E------X--Y----------",
];

const moves = `R 12 D 2 R 2 U 1 R 2`;


function solution(field, moves) {
    const eat_array = ['Y','A','N','D','E','X']    // Ваш код
    let snake_size = 3;
    let start_snake_head_position =[0,2]

    const moves_array = moves.split(' ')
    const vectors ={
        R:[0,1],
        L:[0,-1],
        U:[-1,0],
        D:[1,0]
    }
    const final_moves_array = []
    for (let i = 0; i < moves_array.length; i++) {
        const negative_move = moves_array[i].includes('U')||moves_array[i].includes('L')?-moves_array[i+1]:moves_array[i+1]
        final_moves_array.push(`${moves_array[i]} ${negative_move}`)
        i++
    }

final_moves_array.forEach(item=>{
    let [vector_x,vector_y]= vectors[item.split(' ')[0]]
    
               for(let i =1;i<=Math.abs(item.split(' ')[1]);i++){

        let elem = field[start_snake_head_position[0]+i*vector_x][start_snake_head_position[1]+i*vector_y]
        if(eat_array.includes(elem))
        ++snake_size
    }
         if(item.includes('D')||item.includes('U')){
    start_snake_head_position[0]+=+item.split(' ')[1]//меняем местоположение головы змеи по вертикали
    }
    else
    start_snake_head_position[1]+=+item.split(' ')[1]//меняем местоположение головы змеи по горизонтали
})
    return [start_snake_head_position, snake_size]; // [x, y] - координаты головы змейки, N - размер змейки
}

console.log("FINAL",solution(field, moves))