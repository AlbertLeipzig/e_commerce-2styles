import { IDeadline, IRemainingTime } from '../utils/interfaces';

const deadline: IDeadline = {
  day: 11,
  month: 12,
  hour: 0,
  minute: 0,
};

export const calculateTimeToDeadline = (): IRemainingTime => {
  const now: Date = new Date();

  const deadlineDate: Date = new Date(
    now.getFullYear(),
    deadline.month - 1,
    deadline.day,
    deadline.hour,
    deadline.minute
  );
  const timeDifference: number = deadlineDate.getTime() - now.getTime();

  const days: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes: number = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds: number = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};
