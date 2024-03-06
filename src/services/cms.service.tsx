import { useCallback } from "react";
import { CmsDTO } from "../dtos/cms.dto";
import { api } from "../utils/api.util";
import { toModel as cmsModelMapper } from "../mappers/cms-model.mapper";
import { CmsModel } from "../models/cms.model";

const useCmsService = () => {
  const getCmsInfos = useCallback(async (url: string): Promise<CmsModel | undefined> => {
    try {
      const response = await api.get<CmsDTO>(`${url}/footer`);
      return cmsModelMapper(response.data);
    } catch (error) {
      console.error(error);
    }
    return undefined;
  }, []);

  return { getCmsInfos };
};

export default useCmsService;
