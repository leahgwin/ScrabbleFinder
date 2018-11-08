import { Route } from 'react-router-dom';
import React, { Component } from "react";

let dictionary = ['aa',
    'aah',
    'aahed',
    'aahing',
    'aahs',
    'aal',
    'aalii',
    'aaliis',
    'aals',
    'aardvark',
    'aardwolf',
    'aargh',
    'aarrgh',
    'aarrghh',
    'aas',
    'aasvogel',
    'aba',
    'abaca',
    'abacas',
    'abaci',
    'aback',
    'abacus',
    'abacuses',
    'abaft',
    'abaka',
    'abakas',
    'abalone',
    'abalones',
    'abamp',
    'abampere',
    'abamps',
    'abandon',
    'abandons',
    'abapical',
    'abas',
    'abase',
    'abased',
    'abasedly',
    'abaser',
    'abasers',
    'abases',
    'abash',
    'abashed',
    'abashes',
    'abashing',
    'abasia',
    'abasias',
    'abasing',
    'abatable',
    'abate',
    'abated',
    'abater',
    'abaters',
    'abates',
    'abating',
    'abatis',
    'abatises',
    'abator',
    'abators',
    'abattis',
    'abattoir',
    'abaxial',
    'abaxile',
    'abba',
    'abbacies',
    'abbacy',
    'abbas',
    'abbatial',
    'abbe',
    'abbes',
    'abbess',
    'abbesses',
    'abbey',
    'abbeys',
    'abbot',
    'abbotcy',
    'abbots',
    'abdicate',
    'abdomen',
    'abdomens',
    'abdomina',
    'abduce',
    'abduced',
    'abducens',
    'abducent',
    'abduces',
    'abducing',
    'abduct',
    'abducted',
    'abductor',
    'abducts',
    'abeam',
    'abed',
    'abele',
    'abeles',
    'abelian',
    'abelmosk',
    'aberrant',
    'abet',
    'abetment',
    'abets',
    'abettal',
    'abettals',
    'abetted',
    'abetter',
    'abetters',
    'abetting',
    'abettor',
    'abettors',
    'abeyance',
    'abeyancy',
    'abeyant',
    'abfarad',
    'abfarads',
    'abhenry',
    'abhenrys',
    'abhor',
    'abhorred',
    'abhorrer',
    'abhors',
    'abidance',
    'abide',
    'abided',
    'abider',
    'abiders',
    'abides',
    'abiding',
    'abigail',
    'abigails',
    'ability',
    'abioses',
    'abiosis',
    'abiotic',
    'abject',
    'abjectly',
    'abjure',
    'abjured',
    'abjurer',
    'abjurers',
    'abjures',
    'abjuring',
    'ablate',
    'ablated',
    'ablates',
    'ablating',
    'ablation',
    'ablative',
    'ablaut',
    'ablauts',
    'ablaze',
    'able',
    'ablegate',
    'abler',
    'ables',
    'ablest',
    'ablings',
    'ablins',
    'abloom',
    'abluent',
    'abluents',
    'ablush',
    'abluted',
    'ablution',
    'ably',
    'abmho',
    'abmhos',
    'abnegate',
    'abnormal',
    'abo',
    'aboard',
    'abode',
    'aboded',
    'abodes',
    'aboding',
    'abohm',
    'abohms',
    'aboideau',
    'aboil',
    'aboiteau',
    'abolish',
    'abolla',
    'abollae',
    'aboma',
    'abomas',
    'abomasa',
    'abomasal',
    'abomasi',
    'abomasum',
    'abomasus',
    'aboon',
    'aboral',
    'aborally',
    'aborning',
    'abort',
    'aborted',
    'aborter',
    'aborters',
    'aborting',
    'abortion',
    'abortive',
    'aborts',
    'abos',
    'abought',
    'aboulia',
    'aboulias',
    'aboulic',
    'abound',
    'abounded',
    'abounds',
    'about',
    'above',
    'aboves',
    'abrachia',
    'abradant',
    'abrade',
    'abraded',
    'abrader',
    'abraders',
    'abrades',
    'abrading',
    'abrasion',
    'abrasive',
    'abreact',
    'abreacts',
    'abreast',
    'abri',
    'abridge',
    'abridged',
    'abridger',
    'abridges',
    'abris',
    'abroach',
    'abroad',
    'abrogate',
    'abrosia',
    'abrosias',
    'abrupt',
    'abrupter',
    'abruptly',
    'abscess',
    'abscise',
    'abscised',
    'abscises',
    'abscisin',
    'abscissa',
    'abscond',
    'absconds',
    'abseil',
    'abseiled',
    'abseils',
    'absence',
    'absences',
    'absent',
    'absented',
    'absentee',
    'absenter',
    'absently',
    'absents',
    'absinth',
    'absinthe',
    'absinths',
    'absolute',
    'absolve',
    'absolved',
    'absolver',
    'absolves',
    'absonant',
    'absorb',
    'absorbed',
    'absorber',
    'absorbs',
    'abstain',
    'abstains',
    'absterge',
    'abstract',
    'abstrict',
    'abstruse',
    'absurd',
    'absurder',
    'absurdly',
    'absurds',
    'abubble',
    'abulia',
    'abulias',
    'abulic',
    'abundant',
    'abusable',
    'abuse',
    'abused',
    'abuser',
    'abusers',
    'abuses',
    'abusing',
    'abusive',
    'abut',
    'abutilon',
    'abutment',
    'abuts',
    'abuttal',
    'abuttals',
    'abutted',
    'abutter',
    'abutters',
    'abutting',
    'abuzz',
    'abvolt',
    'abvolts',
    'abwatt',
    'abwatts',
    'aby',
    'abye',
    'abyes',
    'abying',
    'abys',
    'abysm',
    'abysmal',
    'abysms',
    'abyss',
    'abyssal',
    'abysses',
    'acacia',
    'acacias',
    'academe',
    'academes',
    'academia',
    'academic',
    'academy',
    'acajou',
    'acajous',
    'acaleph',
    'acalephe',
    'acalephs',
    'acanthi',
    'acanthus',
    'acapnia',
    'acapnias',
    'acari',
    'acarid',
    'acaridan',
    'acarids',
    'acarine',
    'acarines',
    'acaroid',
    'acarpous',
    'acarus',
    'acaudal',
    'acaudate',
    'acauline',
    'acaulose',
    'acaulous',
    'accede',
    'acceded',
    'acceder',
    'acceders',
    'accedes',
    'acceding',
    'accent',
    'accented',
    'accentor',
    'accents',
    'accept',
    'accepted',
    'acceptee',
    'accepter',
    'acceptor',
    'accepts',
    'access',
    'accessed',
    'accesses',
    'accident',
    'accidia',
    'accidias',
    'accidie',
    'accidies',
    'acclaim',
    'acclaims',
    'accolade',
    'accord',
    'accorded',
    'accorder',
    'accords',
    'accost',
    'accosted',
    'accosts',
    'account',
    'accounts',
    'accouter',
    'accoutre',
    'accredit',
    'accrete',
    'accreted',
    'accretes',
    'accrual',
    'accruals',
    'accrue',
    'accrued',
    'accrues',
    'accruing',
    'accuracy',
    'accurate',
    'accursed',
    'accurst',
    'accusal',
    'accusals',
    'accusant',
    'accuse',
    'accused',
    'accuser',
    'accusers',
    'accuses',
    'accusing',
    'accustom',
    'ace',
    'aced',
    'acedia',
    'acedias',
    'aceldama',
    'acentric',
    'acequia',
    'acequias',
    'acerate',
    'acerated',
    'acerb',
    'acerbate',
    'acerber',
    'acerbest',
    'acerbic',
    'acerbity',
    'acerola',
    'acerolas',
    'acerose',
    'acerous',
    'acervate',
    'acervuli',
    'aces',
    'acescent',
    'aceta',
    'acetal',
    'acetals',
    'acetamid',
    'acetate',
    'acetated',
    'acetates',
    'acetic',
    'acetify',
    'acetin',
    'acetins',
    'acetone',
    'acetones',
    'acetonic',
    'acetose',
    'acetous',
    'acetoxyl',
    'acetum',
    'acetyl',
    'acetylic',
    'acetyls',
    'ache',
    'ached',
    'achene',
    'achenes',
    'achenial',
    'aches',
    'achier',
    'achiest',
    'achieve',
    'achieved',
    'achiever',
    'achieves',
    'achillea',
    'achiness',
    'aching',
    'achingly',
    'achiote',
    'achiotes',
    'acholia',
    'acholias',
    'achoo',
    'achromat',
    'achromic',
    'achy',
    'acicula',
    'aciculae',
    'acicular',
    'aciculas',
    'aciculum',
    'acid',
    'acidemia',
    'acidhead',
    'acidic',
    'acidify',
    'acidity',
    'acidly',
    'acidness',
    'acidoses',
    'acidosis',
    'acidotic',
    'acids',
    'aciduria',
    'acidy',
    'acierate',
    'aciform',
    'acinar',
    'acing',
    'acini',
    'acinic',
    'acinose',
    'acinous',
    'acinus',
    'ackee',
    'ackees',
    'aclinic',
    'acmatic',
    'acme',
    'acmes',
    'acmic',
    'acne',
    'acned',
    'acnes',
    'acnode',
    'acnodes',
    'acock',
    'acold',
    'acolyte',
    'acolytes',
    'aconite',
    'aconites',
    'aconitic',
    'aconitum',
    'acorn',
    'acorns',
    'acoustic',
    'acquaint',
    'acquest',
    'acquests',
    'acquire',
    'acquired',
    'acquirer',
    'acquires',
    'acquit',
    'acquits',
    'acrasia',
    'acrasias',
    'acrasin',
    'acrasins',
    'acre',
    'acreage',
    'acreages',
    'acred',
    'acres',
    'acrid',
    'acrider',
    'acridest',
    'acridine',
    'acridity',
    'acridly',
    'acrimony',
    'acrobat',
    'acrobats',
    'acrodont',
    'acrogen']

export default class Application extends Component {

    state = {
        letters: "",
        arrayOfLetters: [],
        wordArray: [],
        legalWords: []
    }

    //Sets state of letters to the value the user types into the input field
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    //Used on click to call the function to find all permutations of the letters the user input.  Sets result to state of wordArray
    splitString = () => {
        let wordArray = this.getAllCombinations(this.state.letters)
        this.setState({ wordArray: wordArray })
    }

    //Loops over user's letters and makes an array of arrays of each possible combination
    getAllCombinations = (arr) => {

        this.f = (arr) => {
            let result = [];
            let temp = [];

            for (let i = 0; i < arr.length; i++) {
                temp = [];
                temp.push(arr[i]);
                result.push(temp);

                for (let j = 0; j < arr.length; j++) {
                    if (j !== i) {
                        temp = [];
                        temp.push(arr[i]);
                        temp.push(arr[j]);
                        result.push(temp);

                        for (let k = 0; k < arr.length; k++) {
                            if (k !== i && k !== j) {
                                temp = [];
                                temp.push(arr[i]);
                                temp.push(arr[j]);
                                temp.push(arr[k]);
                                result.push(temp);

                                for (let l = 0; l < arr.length; l++) {
                                    if (l !== i && l !== j && l !== k) {
                                        temp = [];
                                        temp.push(arr[i]);
                                        temp.push(arr[j]);
                                        temp.push(arr[k]);
                                        temp.push(arr[l]);
                                        result.push(temp);
                                    }

                                    for (let m = 0; m < arr.length; m++) {
                                        if (m !== i && m !== j && m !== k && m !== l) {
                                            temp = [];
                                            temp.push(arr[i]);
                                            temp.push(arr[j]);
                                            temp.push(arr[k]);
                                            temp.push(arr[l]);
                                            temp.push(arr[m]);
                                            result.push(temp);
                                        }

                                        for (let n = 0; n < arr.length; n++) {
                                            if (n !== i && n !== j && n !== k && n !== l && n !== m) {
                                                temp = [];
                                                temp.push(arr[i]);
                                                temp.push(arr[j]);
                                                temp.push(arr[k]);
                                                temp.push(arr[l]);
                                                temp.push(arr[m]);
                                                temp.push(arr[n]);
                                                result.push(temp);
                                            }

                                            for (let o = 0; o < arr.leogth; o++) {
                                                if (o !== i && o !== j && o !== k && o !== l && o !== m && o !== n) {
                                                    temp = [];
                                                    temp.push(arr[i]);
                                                    temp.push(arr[j]);
                                                    temp.push(arr[k]);
                                                    temp.push(arr[l]);
                                                    temp.push(arr[m]);
                                                    temp.push(arr[n]);
                                                    temp.push(arr[o])
                                                    result.push(temp);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return result;
        }
        let allWordsArray = []
        let legalWords = []
        //Maps over the array of arrays to create one string per array/word
        this.f(arr).map(currentArray => {
            let currentString = ""
            currentArray.map(wordString => {
                currentString += wordString
            })

            //Adds each word to the allWordsArray if it doesnt already exists in
            if (!allWordsArray.includes(currentString)) {

                allWordsArray.push(currentString)
            }
        })

        //Loops through allWordsArray and compares it against the dictionary arry.  If the word exists in the dictionary array, it is added to the legal words array.  Sets legalWords array to state
        allWordsArray.forEach(word => {
            if (dictionary.includes(word)) {
                legalWords.push(word)
            }
            this.setState({
                legalWords: legalWords
            })
        });
    }

    render() {
        return (
            <React.Fragment>
                {/* input field and button */}
                <input type="text" placeholder="enter letters" onChange={this.handleFieldChange} id="letters" />
                <button onClick={this.splitString}>Find Words</button>

                <div>
                    <h3>Legal Words</h3>
                    <p>
                        {/* prints all words in state of legalWords to the virtual DOM */}
                        {this.state.legalWords.map(word => {
                            return (`${word} `)
                        })}
                    </p>
                </div>
            </React.Fragment>
        )
    }
}