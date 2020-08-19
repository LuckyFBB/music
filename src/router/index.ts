/*
 * @Author: FBB
 * @Date: 2020-08-16 15:56:45
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-19 20:34:36
 * @Description: router配置中心
 */

import { Home } from "@/components/Home";
import { Rank } from "@/components/Rank";
import Music from "@/components/Music";
import Singer from "@/components/Singer";
import { Login } from "@/components/Login";
import AlbumDetail from "@/components/AlbumDetail";
import SingerSongList from "@/components/SingerSongList";
import { Account } from "@/components/Account";
import { Mine } from "@/components/Mine";
import Recommend from "@/components/Recommend";
import { Search } from "@/components/Search";

export const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
  { path: "/rank", component: Rank },
  { path: "/music", component: Music, exact: true },
  { path: "/recommend", component: Recommend },
  { path: "/music/:id", component: AlbumDetail },
  { path: "/singer", component: Singer, exact: true },
  { path: "/singer/:id", component: SingerSongList },
  { path: "/account", component: Account },
  { path: "/mine", component: Mine },
  { path: "/search", component: Search },
];
