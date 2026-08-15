type FrameSubscriber = (milliseconds: number) => void;

const frameSubscribers = new Set<FrameSubscriber>();

export function addFrameSubscriber(subscriber: FrameSubscriber) {
  frameSubscribers.add(subscriber);
  return () => {
    frameSubscribers.delete(subscriber);
  };
}

export function tickFrameSubscribers(milliseconds: number) {
  frameSubscribers.forEach((subscriber) => subscriber(milliseconds));
}
