export class GitHubProject {
    owner_url: string;
    url: string;
    id: number;
    name: string;
    body: string;
    number: number;
    creator: Creator;
    created_at: string;
    updated_at: string;
}

class Creator {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_url: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}