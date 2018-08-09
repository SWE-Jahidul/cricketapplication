import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "মাশরাফি মুর্তজা ",
        "profilePic": "assets/img/mashrafi.jpg",
        "about": `
                    Personal information
                Full name	: Mashrafe Bin Mortaza <br>
                Date of Birth :	5 October 1983 (age 34)
                Narail, Bangladesh
                Nickname :	Koushik, Mash, Narail Express [1]
                Height :	1.91[2] m (6 ft 3 in)
                Batting	: Right-handed
                Bowling	: Right arm medium-fast
                Role :	Bowler
                Bangladesh ODI Captain
`

      },
      {
        "name": "সাকিব আল হাসান",
        "profilePic": "assets/img/speakers/sakib.jpg",
        "about":    
        `
        
        বিস্তারিত সাকিব আল হাসান এর 

        `
      },
      {
        "name": "মুশফিকুর রহিম",
        "profilePic": "assets/img/speakers/musi.jpeg",
        "about": "About of musfiqure rahim "
      },
      {
        "name": "মোহাম্মদ মাহমুদুল্লাহ রিয়াদ",
        "profilePic": "assets/img/speakers/mahamud.jpg",
        "about": "about of mahamudulla "
      },
      {
        "name": "মুস্তাফিজুর রহমান",
        "profilePic": "assets/img/speakers/mustafiz.jpeg",
        "about": "About of mustafizur"
      },
      {
        "name": "মোহাম্মদ রুবেল হোসেন",
        "profilePic": "assets/img/speakers/rubel.jpeg",
        "about": "About of rubel hosain "
      },
      {
        "name": "তামিম ইকবাল খান",
        "profilePic": "assets/img/speakers/Tamim.jpg",
        "about": "About Tamim iqbal khan "
      },
      {
        "name": "মোহাম্মদ সাব্বির রহমান",
        "profilePic": "assets/img/speakers/Sabbir-Rahman.jpg",
        "about": "About sabbir rahaman ruman ."
      },
      {
        "name": "মোসাদ্দেক হোসেন",
        "profilePic": "assets/img/speakers/mosaddek-hossain.jpg",
        "about": "About musaddek hosain saikot"
      },
      {
        "name": "মেহেদি হাসান মিরাজ",
        "profilePic": "assets/img/speakers/miraz.jpg",
        "about": "About mehady hasan miraz"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
