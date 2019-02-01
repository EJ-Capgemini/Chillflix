export class Video {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public thumbnail: string,
      public genre: string,
      public duration: string,
      public row: number
    ) { }

    toString(){
      return this.id + ", " + this.title + ", " + this.description + ", " + this.thumbnail + ", " + this.genre + ", " + 
      this.duration + ", " + this.row;
    }
  }
  