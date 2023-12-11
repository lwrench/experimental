class Queue {
  maxParallel = 5;
  q = [];
  executingCount = 0;

  constructor(maxParallel = 5) {
    this.maxParallel = maxParallel;
  }

  execute() {
    if (this.executingCount >= this.maxParallel) {
      return
    }

    while(this.executingCount < this.maxParallel) {
      const func = this.q.shift()
      if (func) {
        this.executingCount++
        setTimeout(() => {
          const ret = func()
          if (typeof ret === 'object' && typeof ret.then === 'function') {
            ret.then(() => {
              this.executingCount--
              this.execute()
            })
          }
        })
      } else {
        break;
      }
    }
  }

  push(func) {
    this.q.push(func)
    if (!this.executingCount) {
      this.execute();
    }
  }
}