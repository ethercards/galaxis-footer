interface EnvironmentsModel {
  host: string;
  api: {
    cms: string;
    missionControl: string;
  };
  urls: {
    community: string;
    account: string;
    engine: string;
    punkRoyale: string;
  };
}

export default EnvironmentsModel;
