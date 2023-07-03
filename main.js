nameOfTheStudentArray=[];
//declaramos um array vazio

                         

function submit()   //declaramos a função submit
                    //pegamos o nome dos alunos na caixa de texto usando o id e armazenamos em uma variável 
                   //declaramos 4 variáveis já que temos 4 alunos             
{
    
var name1= document.getElementById("nameOfTheStudent1").value;
var name2= document.getElementById("nameOfTheStudent2").value;
var name3= document.getElementById("nameOfTheStudent3").value;
var name4= document.getElementById("nameOfTheStudent4").value;

//Uma a uma colocamos todas as variáveis no array

nameOfTheStudentArray.push(name1);
nameOfTheStudentArray.push(name2);
nameOfTheStudentArray.push(name3);
nameOfTheStudentArray.push(name4);


console.log(nameOfTheStudentArray);

//Atualizamos a tag div com a id displayName com esses valores de array
document.getElementById("displayName").innerHTML=nameOfTheStudentArray;
}







