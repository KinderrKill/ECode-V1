type QueueItem = () => Promise<void>;

export default class TypingWriter {
  private queue: QueueItem[] = [];
  private parentElement: HTMLElement;
  private element: HTMLElement;
  private typingSpeed: number;
  private deletingSpeed: number;

  constructor(parentElement: HTMLElement) {
    this.parentElement = parentElement;
    this.element = document.createElement('p');
    this.typingSpeed = 50;
    this.deletingSpeed = 30;

    this.parentElement.append(this.element);
  }

  type(string: string, speed: number = this.typingSpeed) {
    this.addToQueue((resolve) => {
      let index = 0;
      const interval = setInterval(() => {
        this.element.append(string[index]);
        index++;

        if (index >= string.length) {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    });

    return this;
  }

  pauseFor(duration: number) {
    this.addToQueue((resolve) => {
      setTimeout(resolve, duration);
    });

    return this;
  }

  deleteChar(count: number, speed: number = this.deletingSpeed) {
    this.addToQueue((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.element.innerText = this.element.innerText.substring(0, this.element.innerText.length - 1);
        i++;
        if (i >= count) {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    });

    return this;
  }

  deleteAll(speed?: number) {
    this.addToQueue((resolve) => {
      const interval = setInterval(() => {
        this.element.innerText = this.element.innerText.substring(0, this.element.innerText.length - 1);
        if (this.element.innerText.length === 0) {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    });

    return this;
  }

  async start(shouldLoop?: boolean) {
    let callback = this.queue.shift();

    while (callback != null) {
      await callback();

      if (shouldLoop) this.queue.push(callback);

      callback = this.queue.shift();
    }

    return this;
  }

  clear() {
    this.addToQueue((resolve) => {
      this.element.innerText = '';
      resolve();
    });

    return this;
  }

  private addToQueue(callback: (resolve: () => void) => void) {
    this.queue.push(() => {
      return new Promise(callback);
    });
  }

  // Utils
  isActive(): boolean {
    return this.queue.length > 0;
  }

  isFinished(): boolean {
    return this.parentElement.querySelectorAll('p').length > 1 && !this.isActive();
  }
}
