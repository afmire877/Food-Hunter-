import { cred } from '../../config';
import Axios from 'axios';

export class Search {
    constructor({query, min, max, diet}) {
        this.query = query;
        this.diet = diet;
        this.min = min;
        this.max = max;

    }

    async getResults() {
        try {
            const paramConstruct = (min, max, diet) => {
                let output = '';
                if(diet) output +=  `&diet=${diet}`;
                if(min && max) output +=  `&calories=${min}-${max}`;
                return output
            }
            let res = await Axios(`${cred.proxy}https://api.edamam.com/search?q=${this.query}&app_id=${cred.appID}&app_key=${cred.key}&more=true${paramConstruct(this.min, this.max, this.diet)}`);
            this.result = res.data.hits;
        } catch(err) {
            console.log(err)
        }
    }
}