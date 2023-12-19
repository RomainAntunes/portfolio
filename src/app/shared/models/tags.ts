import {Commit} from "./commit";

export interface Tags {
  name: string;
  zipball_url: string;
  tarball_url: string;
  commit: Commit;
  node_id: string;
}
