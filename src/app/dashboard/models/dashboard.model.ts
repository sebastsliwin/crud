class DashboardCard {
  constructor(public title: string, public cols: number, public rows: number) {
  }
}

const DashboardMobileCards = [
  new DashboardCard('Card 1', 1, 1),
  new DashboardCard('Card 2', 1, 1),
  new DashboardCard('Card 3', 1, 1),
  new DashboardCard('Card 4', 1, 1),
];

const DashboardDesktopCard = [
  new DashboardCard('Card 1', 2, 1),
  new DashboardCard('Card 2', 1, 1),
  new DashboardCard('Card 3', 1, 1),
];

export const getDashboardCards = (isMobile: boolean): DashboardCard[] => isMobile ? DashboardMobileCards : DashboardDesktopCard;

