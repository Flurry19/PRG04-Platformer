export class Score {

    score = 0
    getScore() {
        return this.score
    }

    setScore(value) {
        this.score = value
    }
    incrementScore() {
        console.log(this.score)
        this.score = this.score + 1
        console.log(this.score)
    }

}