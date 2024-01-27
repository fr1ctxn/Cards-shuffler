let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * array.length);
    currentIndex -= 1;

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}

document.getElementById("shufflebtn").onclick = () => {
  //   numbers.forEach((number) => console.log(number));
  shuffle(numbers);
  document.getElementById("card1").innerHTML = numbers[0];
  document.getElementById("card2").innerHTML = numbers[1];
  document.getElementById("card3").innerHTML = numbers[2];
  document.getElementById("card4").innerHTML = numbers[3];
  document.getElementById("card5").innerHTML = numbers[4];
  document.getElementById("card6").innerHTML = numbers[5];
  document.getElementById("card7").innerHTML = numbers[6];
  document.getElementById("card8").innerHTML = numbers[7];
  document.getElementById("card9").innerHTML = numbers[8];
  document.getElementById("card10").innerHTML = numbers[9];
  document.getElementById("card11").innerHTML = numbers[10];
  document.getElementById("card12").innerHTML = numbers[11];
};
