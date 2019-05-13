import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
//quote input in the quote form//
    quotes = [
      new Quote(1,"Who so neglects learning in his youth loses his past,and is dead to the future.","Author:Euripides","Yang Lanti",0,0,new Date(2018,12,21)),
      new Quote(2,"Only a man who felt ultimate despair is capable of feeling ultimate bliss.","Author:Alexandre Dumas","Octopizzo",0,0,new Date(2017,8,2)),
      new Quote(3,"Give people a second chance.never a third","Author:Anonymus","Rewel",0,0,new Date(2018,9,29)),
      new Quote(4,"Batter me down,drag me in dust.But as long as my heart beats with Hope,I will rise like a phoenix","Author:Cleopatra","Nicole",0,0,new Date(2019,3,16)),
      new Quote(5,"Its not the fast one or the shrewd one that finished the race.The silent one beat them all","Author:Aeopas","Julia W.",0,0,new Date(2019,7,23)),
      new Quote(6,"Do not deprive someone of hope.sometimes it is all they have.","Author:Old Man","Peter Yang",0,0,new Date(2020,5,2)),
      new Quote(7,"If you can conquer doubt and fear,then you can conquer failure.","Author:James Allen.","Rogers",0,0,new Date(2019,4,30)),
      new Quote(8,"Ultimately,it all comes down to how much you want something,all factors and setbacks aside.","Author:Yang Lanti","Eliud",0,0,new Date(2016,4,1)),
      new Quote(9,"He who angers you,conquers you.","Author:Elizabeth Kenny","Matuidi",0,0,new Date(2019,6,2)),
      new Quote(10,"Nani amechukua huduma no.?.","Author:Nobody","Idle Kenyan",0,0,new Date(2019,5,17)),
    ]

    toogleDetails(index){
   this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
   this.quotes[index].showSubmit= !this.quotes[index].showSubmit;
 }

 upvote(index){
 this.quotes[index].upvotes++;
}
downvote(index){
 this.quotes[index].downvotes++;
}
//logic for deleting quotes
deleteQuote(isComplete,index){
 if (isComplete){
   let toDelete=confirm(`You sure you want to delete this? ${this.quotes[index].name}`)
   if(toDelete=true){
     this.quotes.splice(index,1)
   }
}

 }


 addNewQuote(quote){
  this.quotes.push(quote)

 }

 constructor() { }

 ngOnInit() {

}
}
