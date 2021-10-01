

// tops
import {of} from "rxjs";

export const tops = ['blouses', 'bodysuits', 'nightOut', 'statement', 'tanksCamisSleeveless', 'tshirt and shortSleeve', 'vneck']
// shirts, T, long, blouses, turtleneck, hoodies, crewnecks,


// dresses
export const dressTypes = ['cocktail', 'casual', 'evening', 'wedding', 'floral&prints', 'lbd', 'nightOut', 'work']

// dress styles/sewing patterns?
export const dressSewingPatterns = ['aline', 'apron', 'asymmetrical', 'ballgown', 'basic', 'blouson',
  'bodycon', 'caftan', 'empire', 'charleston/flapper', 'dolmon', 'halter',
  'highwaist', 'jumper', 'dropwaist', 'oneshoulder', 'pouf/balloon', 'princessline',
  'sundress', 'sheath', 'shift', 'shirtdress', 'slipdress', 'strapless', 'tent', 'tunic', 'wrap', 'yoke'];

export const dressNeckline = ['boatneck', 'collared', 'cowlneck', 'crewneck', 'halter',
  'illusion', 'keyhole', 'mockneck', 'offShoulder', 'oneShoulder', 'scoopneck',
  'squareneck', 'strapless', 'sweetheart', '']

export const dressLength = ['floor', 'maxi', 'midi', 'short']
export const dressSleeveLength = ['long', 'short', 'sleeveless', 'strapless', '3/4']

export const dressesFilter$ = of({
  types: [...dressTypes],
  sewingPatters: [...dressSewingPatterns],
  neckline: [...dressNeckline],
  length: [...dressLength],
  sleeveLength: [...dressSleeveLength]
});
// outerwear


// bottoms
export const jeans = [];
export const pants = [];
export const skirts = [];
export const shorts = [];


// filter on color(s)

// filter on material(s)


// eventually, accessory type shit, footwear, beauty styles maybe rather than product specific/look not sure
export const materials = ['cotton', 'fauxLeather', 'linen', 'silk', 'wool']
