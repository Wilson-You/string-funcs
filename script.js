//charAt; return a character from a string
const charStr = 'I have a book'
const pCharAt = document.querySelector('.charat')
pCharAt.innerHTML = 'Method charAt: ' + charStr.charAt(2)

//concat; return a concatenated string
const concatStr1 = 'I do not have a book.'
const concatStr2 = 'You can buy one.'
const pConcat = document.querySelector('.concat')
pConcat.innerHTML = 'Method concat: ' + concatStr1.concat(' ', concatStr2)

//includes; return true or false
const includesStr = 'Some book is here'
const pIncludes = document.querySelector('.includes')
pIncludes.innerHTML = 'Method includes: ' + includesStr.includes('book')

//indexOf; return the index of the string to be found or return -1
const indexOfStr = 'Success loves prepareness'
const pIndexOf = document.querySelector('.indexof')
pIndexOf.innerHTML = 'Method indexOf: ' + indexOfStr.indexOf('loves')

//startWith; return true or false
const startWithStr = 'Wild life is life you should try before.'
const pStartWith = document.querySelector('.startwith')
pStartWith.innerHTML = 'Method startWith: ' + startWithStr.startsWith('Wil')

//endsWith; return true or false
const endsWithStr = 'Wild life is life you should try before.'
const pEndsWith = document.querySelector('.endswith')
pEndsWith.innerHTML = 'Method endsWith: ' + endsWithStr.endsWith('before.')

//match; return the result of matching a string against a regular expression
const matchString = 'Life is what you try it'
const pMatch = document.querySelector('.match')
const regex = /\w(?=\s)/g
pMatch.innerHTML = 'Method match: ' + matchString.match(regex)
console.log(matchString.match(regex))

//matchAll, return an object iterator
const matchAllStr = 'Do you have a hat with a bat logo on it?'
const pMatchAll = document.querySelector('.matchall')
const regex2 = /(h|b)at/g
pMatchAll.innerHTML = 'Method matchAll: ' + [...matchAllStr.matchAll(regex2)]
console.log([...matchAllStr.matchAll(regex2)])

//padStart; return a string padded to a given length with a given string
const padStartStr = '45'
const pPadStart = document.querySelector('.padstart')
pPadStart.innerHTML = 'Method padStart: ' + padStartStr.padStart(5, '123')
console.log(padStartStr.padStart(5, '123'))

//padEnd; return a string padded to a given length with a given string
const padEndStr = 'Letter one'
const pPadEnd = document.querySelector('.padend')
pPadEnd.innerHTML = 'Method padEnd: ' + padEndStr.padEnd(20, '*')
console.log(padEndStr.padEnd(20, '*'))

//repeat; return a string repeated specified times and concatenated together
const repeatStr = 'Once again '
const pRepeat = document.querySelector('.repeat')
pRepeat.innerHTML = 'Method repeat: ' + repeatStr.repeat(5)
console.log(repeatStr.repeat(5))

//replace; return a string with the first specified word replaced by a replacement
const replaceStr = 'I have a white dog and a black dog'
const pReplace = document.querySelector('.replace')
const regex3 = /dog/g
pReplace.innerHTML = 'Method replace: ' + replaceStr.replace('dog', 'cat')
console.log(replaceStr.replace(regex3, 'cat'))

//replaceall; return a string with all the specified words replaced by a replacement
const replaceAllStr = 'I have a white dog and a black dog'
const pReplaceAll = document.querySelector('.replaceall')
const regex4 = /dog/
pReplaceAll.innerHTML = 'Method replaceAll: ' + replaceAllStr.replaceAll('dog', 'cat')
console.log(replaceAllStr.replaceAll(regex3, 'cat'))

//search; return the index of the matched portion or -1 if not found
const searchStr = 'The world is not developing fast'
const pSearch = document.querySelector('.search')
pSearch.innerHTML = 'Method search: ' + searchStr.search('develop')
console.log(searchStr.search('develop'))

//slice; shallow copy a portion of a string with the specified index number(s); return a new string
const sliceStr = 'Nothing is a big deal'
const pSlice = document.querySelector('.slice')
pSlice.innerHTML = 'Method slice: ' + sliceStr.slice(8, 10)
console.log(sliceStr.slice(8, 10))

//split; splits a string into multiple substrings and return an array containing these subarrays; it includes two params, one is the seperator and another is the limit; the seperator can be regex;
const splitRegex = /\? |, |\. |; /g
const splitStr = 'Go where you want to go'
const pSplit = document.querySelector('.split')
pSplit.innerHTML = 'Method split: ' + splitStr.split(' ')
console.log(splitStr.split(' ', 4))

console.log('Who knows that? she asked Tom; No one knows that, she answered.'.split(splitRegex))

//substring; return a portion of the original string
const subStr = 'Time is not much'
const pSubString = document.querySelector('.substring')
pSubString.innerHTML = 'Method substring: ' + subStr.substring(4, 7)
console.log(subStr.substring(4, 7))

//trim; remove white spaces both at the start and the end; return a new string without the deleted spaces
const trimStr = '  Nothing bears this  '
const pTrim = document.querySelector('.trim')
pTrim.innerHTML = 'Method trim: ' + trimStr.trim()

//numstr
const num = 234
const pNumStr = document.querySelector('.numstr')
const multiAndConcat = number => {
    const numToStr = Array.from(number.toString())
    const parsed = numToStr.map(item => parseInt(item))
    const multiplied = parsed.map(item => item * item)
    const arrToStr = multiplied.join('')
    const parseStrToInt = parseInt(arrToStr)

    return parseStrToInt
}
pNumStr.innerHTML = multiAndConcat(num)

