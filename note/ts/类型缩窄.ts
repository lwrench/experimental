type Alignment1 = string | 'right' | 'left';
type Alignment2 = (string & {}) | 'right' | 'left';

const a: Alignment2 = 'left'
const aa: Alignment1 = 'll'