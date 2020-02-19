/*
* p-Profile
*/
"https://api.github.com/users/prp1277" meta [IsParameterQuery=true, Type="Any", IsParameterQueryRequired=true]

/*
* p-receivedEvents
*/
"https://api.github.com/users/prp1277/received_events" meta [IsParameterQuery=true, Type="Any", IsParameterQueryRequired=true]

/*
* p-patrickpowell
*/
"https://api.github.com/repos/prp1277/patrick-powell/events" meta [IsParameterQuery=true, Type="Any", IsParameterQueryRequired=true]

/*
* prp1277
*/
let
    Source = Json.Document(Web.Contents(#"p-Profile")),
    #"Converted to Table" = Record.ToTable(Source),
    #"Transposed Table" = Table.Transpose(#"Converted to Table"),
    #"Promoted Headers" = Table.PromoteHeaders(#"Transposed Table", [PromoteAllScalars=true]),
    #"Changed Type" = Table.TransformColumnTypes(#"Promoted Headers",{{"updated_at", type datetime}, {"created_at", type datetime}, {"following", Int64.Type}, {"followers", Int64.Type}, {"public_gists", Int64.Type}, {"public_repos", Int64.Type}, {"bio", type text}, {"hireable", type logical}, {"email", type text}, {"location", type text}, {"blog", type text}, {"company", type text}, {"name", type text}, {"site_admin", type logical}, {"type", type text}, {"received_events_url", type text}, {"events_url", type text}, {"repos_url", type text}, {"organizations_url", type text}, {"subscriptions_url", type text}, {"starred_url", type text}, {"gists_url", type text}, {"following_url", type text}, {"followers_url", type text}, {"html_url", type text}, {"url", type text}, {"gravatar_id", type text}, {"avatar_url", type text}, {"node_id", type text}, {"id", type text}, {"login", type text}})
in
    #"Changed Type"

/*
* received_events
*/
let
    Source = Json.Document(Web.Contents(#"p-receivedEvents")),
    #"Converted to Table" = Table.FromList(Source, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
    #"Expanded Column1" = Table.ExpandRecordColumn(#"Converted to Table", "Column1", {"id", "type", "actor", "repo", "payload", "public", "created_at", "org"}, {"id", "type", "actor", "repo", "payload", "public", "created_at", "org"}),
    #"Expanded actor" = Table.ExpandRecordColumn(#"Expanded Column1", "actor", {"id", "login", "display_login", "url"}, {"id.1", "login", "display_login", "url"}),
    #"Expanded repo" = Table.ExpandRecordColumn(#"Expanded actor", "repo", {"name", "url"}, {"name", "url.1"}),
    #"Expanded payload" = Table.ExpandRecordColumn(#"Expanded repo", "payload", {"forkee"}, {"forkee"}),
    #"Expanded org" = Table.ExpandRecordColumn(#"Expanded payload", "org", {"login", "gravatar_id", "url"}, {"login.1", "gravatar_id", "url.2"}),
    #"Removed Columns" = Table.RemoveColumns(#"Expanded org",{"forkee"}),
    #"Changed Type" = Table.TransformColumnTypes(#"Removed Columns",{{"created_at", type datetime}, {"id", type text}, {"type", type text}, {"id.1", type text}, {"login", type text}, {"display_login", type text}, {"url", type text}, {"name", type text}, {"url.1", type text}, {"public", type logical}, {"login.1", type text}, {"gravatar_id", type text}, {"url.2", type text}}),
    #"Duplicated Column" = Table.DuplicateColumn(#"Changed Type", "created_at", "created_at - Copy"),
    #"Extracted Date" = Table.TransformColumns(#"Duplicated Column",{{"created_at - Copy", DateTime.Date, type date}}),
    #"Duplicated Column1" = Table.DuplicateColumn(#"Extracted Date", "created_at", "created_at - Copy.1"),
    #"Changed Type1" = Table.TransformColumnTypes(#"Duplicated Column1",{{"created_at - Copy.1", type time}}),
    #"Renamed Columns" = Table.RenameColumns(#"Changed Type1",{{"created_at - Copy.1", "createdTime"}, {"created_at - Copy", "createdDate"}})
in
    #"Renamed Columns"

/*
* repos
*/
let
    Source = Json.Document(Web.Contents(#"p-Profile" & "/repos")),
    #"Converted to Table" = Table.FromList(Source, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
    #"Expanded Column1" = Table.ExpandRecordColumn(#"Converted to Table", "Column1", {"id", "node_id", "name", "full_name", "private", "owner", "html_url", "description", "fork", "url", "forks_url", "keys_url", "collaborators_url", "teams_url", "hooks_url", "issue_events_url", "events_url", "assignees_url", "branches_url", "tags_url", "blobs_url", "git_tags_url", "git_refs_url", "trees_url", "statuses_url", "languages_url", "stargazers_url", "contributors_url", "subscribers_url", "subscription_url", "commits_url", "git_commits_url", "comments_url", "issue_comment_url", "contents_url", "compare_url", "merges_url", "archive_url", "downloads_url", "issues_url", "pulls_url", "milestones_url", "notifications_url", "labels_url", "releases_url", "deployments_url", "created_at", "updated_at", "pushed_at", "git_url", "ssh_url", "clone_url", "svn_url", "homepage", "size", "stargazers_count", "watchers_count", "language", "has_issues", "has_projects", "has_downloads", "has_wiki", "has_pages", "forks_count", "mirror_url", "archived", "disabled", "open_issues_count", "license", "forks", "open_issues", "watchers", "default_branch"}, {"id", "node_id", "name", "full_name", "private", "owner", "html_url", "description", "fork", "url", "forks_url", "keys_url", "collaborators_url", "teams_url", "hooks_url", "issue_events_url", "events_url", "assignees_url", "branches_url", "tags_url", "blobs_url", "git_tags_url", "git_refs_url", "trees_url", "statuses_url", "languages_url", "stargazers_url", "contributors_url", "subscribers_url", "subscription_url", "commits_url", "git_commits_url", "comments_url", "issue_comment_url", "contents_url", "compare_url", "merges_url", "archive_url", "downloads_url", "issues_url", "pulls_url", "milestones_url", "notifications_url", "labels_url", "releases_url", "deployments_url", "created_at", "updated_at", "pushed_at", "git_url", "ssh_url", "clone_url", "svn_url", "homepage", "size", "stargazers_count", "watchers_count", "language", "has_issues", "has_projects", "has_downloads", "has_wiki", "has_pages", "forks_count", "mirror_url", "archived", "disabled", "open_issues_count", "license", "forks", "open_issues", "watchers", "default_branch"}),
    #"Expanded owner" = Table.ExpandRecordColumn(#"Expanded Column1", "owner", {"login"}, {"login"}),
    #"Changed Type" = Table.TransformColumnTypes(#"Expanded owner",{{"fork", type logical}, {"url", type text}, {"forks_url", type text}, {"created_at", type datetime}, {"updated_at", type datetime}, {"pushed_at", type datetime}, {"size", Int64.Type}, {"stargazers_count", Int64.Type}, {"watchers_count", Int64.Type}, {"language", type text}, {"has_issues", type logical}, {"has_projects", type logical}, {"has_downloads", type logical}, {"has_wiki", type logical}, {"has_pages", type logical}, {"forks_count", Int64.Type}, {"archived", type logical}, {"disabled", type logical}, {"open_issues_count", Int64.Type}, {"forks", Int64.Type}, {"open_issues", Int64.Type}, {"watchers", Int64.Type}, {"default_branch", type text}, {"mirror_url", type text}, {"homepage", type text}, {"svn_url", type text}, {"clone_url", type text}, {"ssh_url", type text}, {"git_url", type text}, {"keys_url", type text}, {"collaborators_url", type text}, {"teams_url", type text}, {"hooks_url", type text}, {"issue_events_url", type text}, {"events_url", type text}, {"assignees_url", type text}, {"branches_url", type text}, {"tags_url", type text}, {"blobs_url", type text}, {"git_tags_url", type text}, {"git_refs_url", type text}, {"trees_url", type text}, {"statuses_url", type text}, {"languages_url", type text}, {"stargazers_url", type text}, {"contributors_url", type text}, {"subscribers_url", type text}, {"subscription_url", type text}, {"commits_url", type text}, {"git_commits_url", type text}, {"comments_url", type text}, {"issue_comment_url", type text}, {"contents_url", type text}, {"compare_url", type text}, {"merges_url", type text}, {"archive_url", type text}, {"downloads_url", type text}, {"issues_url", type text}, {"pulls_url", type text}, {"milestones_url", type text}, {"notifications_url", type text}, {"labels_url", type text}, {"releases_url", type text}, {"deployments_url", type text}, {"name", type text}, {"node_id", type text}, {"id", type text}, {"full_name", type text}, {"private", type logical}, {"login", type text}, {"html_url", type text}, {"description", type text}}),
    #"Duplicated Column" = Table.DuplicateColumn(#"Changed Type", "created_at", "created_at - Copy"),
    #"Extracted Date" = Table.TransformColumns(#"Duplicated Column",{{"created_at - Copy", DateTime.Date, type date}}),
    #"Duplicated Column1" = Table.DuplicateColumn(#"Extracted Date", "updated_at", "updated_at - Copy"),
    #"Extracted Date1" = Table.TransformColumns(#"Duplicated Column1",{{"updated_at - Copy", DateTime.Date, type date}}),
    #"Duplicated Column2" = Table.DuplicateColumn(#"Extracted Date1", "pushed_at", "pushed_at - Copy"),
    #"Extracted Date2" = Table.TransformColumns(#"Duplicated Column2",{{"pushed_at - Copy", DateTime.Date, type date}}),
    #"Grouped Rows" = Table.Group(#"Extracted Date2", {"name"}, {{"Table", each _, type table [id=text, node_id=text, name=text, full_name=text, private=logical, login=text, html_url=text, description=text, fork=logical, url=text, forks_url=text, keys_url=text, collaborators_url=text, teams_url=text, hooks_url=text, issue_events_url=text, events_url=text, assignees_url=text, branches_url=text, tags_url=text, blobs_url=text, git_tags_url=text, git_refs_url=text, trees_url=text, statuses_url=text, languages_url=text, stargazers_url=text, contributors_url=text, subscribers_url=text, subscription_url=text, commits_url=text, git_commits_url=text, comments_url=text, issue_comment_url=text, contents_url=text, compare_url=text, merges_url=text, archive_url=text, downloads_url=text, issues_url=text, pulls_url=text, milestones_url=text, notifications_url=text, labels_url=text, releases_url=text, deployments_url=text, created_at=datetime, updated_at=datetime, pushed_at=datetime, git_url=text, ssh_url=text, clone_url=text, svn_url=text, homepage=text, size=number, stargazers_count=number, watchers_count=number, language=text, has_issues=logical, has_projects=logical, has_downloads=logical, has_wiki=logical, has_pages=logical, forks_count=number, mirror_url=text, archived=logical, disabled=logical, open_issues_count=number, license=record, forks=number, open_issues=number, watchers=number, default_branch=text, #"created_at - Copy"=date, #"updated_at - Copy"=date, #"pushed_at - Copy"=date]}}),
    #"Expanded Table" = Table.ExpandTableColumn(#"Grouped Rows", "Table", {"id", "node_id", "full_name", "private", "login", "html_url", "description", "fork", "created_at", "updated_at", "pushed_at", "homepage", "size", "stargazers_count", "watchers_count", "language", "has_issues", "has_projects", "has_downloads", "has_wiki", "has_pages", "forks_count", "archived", "disabled", "open_issues_count", "forks", "open_issues", "watchers", "default_branch", "created_at - Copy", "updated_at - Copy", "pushed_at - Copy"}, {"id", "node_id", "full_name", "private", "login", "html_url", "description", "fork", "created_at", "updated_at", "pushed_at", "homepage", "size", "stargazers_count", "watchers_count", "language", "has_issues", "has_projects", "has_downloads", "has_wiki", "has_pages", "forks_count", "archived", "disabled", "open_issues_count", "forks", "open_issues", "watchers", "default_branch", "created_at - Copy", "updated_at - Copy", "pushed_at - Copy"}),
    #"Renamed Columns1" = Table.RenameColumns(#"Expanded Table",{{"created_at - Copy", "createdDate"}, {"updated_at - Copy", "updatedDate"}, {"pushed_at - Copy", "pushedAtDate"}})
in
    #"Renamed Columns1"

/*
* events
*/
let
    Source = Json.Document(Web.Contents(#"p-Profile" &"/events")),
    #"Converted to Table" = Table.FromList(Source, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
    #"Expanded Column1" = Table.ExpandRecordColumn(#"Converted to Table", "Column1", {"id", "type", "actor", "repo", "payload", "public", "created_at"}, {"id", "type", "actor", "repo", "payload", "public", "created_at"}),
    #"Expanded payload" = Table.ExpandRecordColumn(#"Expanded Column1", "payload", {"push_id", "size", "distinct_size", "ref", "head", "before", "commits"}, {"push_id", "size", "distinct_size", "ref", "head", "before", "commits"}),
    #"Expanded commits" = Table.ExpandListColumn(#"Expanded payload", "commits"),
    #"Expanded commits1" = Table.ExpandRecordColumn(#"Expanded commits", "commits", {"sha", "author", "message", "distinct", "url"}, {"sha", "author", "message", "distinct", "url"}),
    #"Expanded author" = Table.ExpandRecordColumn(#"Expanded commits1", "author", {"email", "name"}, {"email", "name"}),
    #"Expanded repo" = Table.ExpandRecordColumn(#"Expanded author", "repo", {"name", "url"}, {"name.1", "url.1"}),
    #"Expanded actor" = Table.ExpandRecordColumn(#"Expanded repo", "actor", {"id", "login", "display_login", "url", "avatar_url"}, {"id.1", "login", "display_login", "url.2", "avatar_url"}),
    #"Cleaned Text" = Table.TransformColumns(Table.TransformColumnTypes(#"Expanded actor", {{"id.1", type text}, {"push_id", type text}, {"size", type text}, {"distinct_size", type text}, {"distinct", type text}, {"public", type text}}, "en-US"),{{"id", Text.Clean, type text}, {"type", Text.Clean, type text}, {"id.1", Text.Clean, type text}, {"login", Text.Clean, type text}, {"display_login", Text.Clean, type text}, {"url.2", Text.Clean, type text}, {"avatar_url", Text.Clean, type text}, {"name.1", Text.Clean, type text}, {"url.1", Text.Clean, type text}, {"push_id", Text.Clean, type text}, {"size", Text.Clean, type text}, {"distinct_size", Text.Clean, type text}, {"ref", Text.Clean, type text}, {"head", Text.Clean, type text}, {"before", Text.Clean, type text}, {"sha", Text.Clean, type text}, {"email", Text.Clean, type text}, {"name", Text.Clean, type text}, {"message", Text.Clean, type text}, {"distinct", Text.Clean, type text}, {"url", Text.Clean, type text}, {"public", Text.Clean, type text}, {"created_at", Text.Clean, type text}}),
    #"Trimmed Text" = Table.TransformColumns(#"Cleaned Text",{{"id", Text.Trim, type text}, {"type", Text.Trim, type text}, {"id.1", Text.Trim, type text}, {"login", Text.Trim, type text}, {"display_login", Text.Trim, type text}, {"url.2", Text.Trim, type text}, {"avatar_url", Text.Trim, type text}, {"name.1", Text.Trim, type text}, {"url.1", Text.Trim, type text}, {"push_id", Text.Trim, type text}, {"size", Text.Trim, type text}, {"distinct_size", Text.Trim, type text}, {"ref", Text.Trim, type text}, {"head", Text.Trim, type text}, {"before", Text.Trim, type text}, {"sha", Text.Trim, type text}, {"email", Text.Trim, type text}, {"name", Text.Trim, type text}, {"message", Text.Trim, type text}, {"distinct", Text.Trim, type text}, {"url", Text.Trim, type text}, {"public", Text.Trim, type text}, {"created_at", Text.Trim, type text}}),
    #"Changed Type" = Table.TransformColumnTypes(#"Trimmed Text",{{"created_at", type datetime}, {"size", Int64.Type}, {"distinct_size", Int64.Type}, {"distinct", type logical}, {"public", type logical}}),
    #"Duplicated Column" = Table.DuplicateColumn(#"Changed Type", "created_at", "created_at - Copy"),
    #"Extracted Date" = Table.TransformColumns(#"Duplicated Column",{{"created_at - Copy", DateTime.Date, type date}}),
    #"Duplicated Column1" = Table.DuplicateColumn(#"Extracted Date", "created_at", "created_at - Copy.1"),
    #"Renamed Columns" = Table.RenameColumns(#"Duplicated Column1",{{"created_at - Copy", "createdDate"}}),
    #"Changed Type1" = Table.TransformColumnTypes(#"Renamed Columns",{{"created_at - Copy.1", type time}}),
    #"Renamed Columns1" = Table.RenameColumns(#"Changed Type1",{{"created_at - Copy.1", "createdTime"}, {"type", "eventType"}}),
    #"Removed Columns" = Table.RemoveColumns(#"Renamed Columns1",{"id.1"}),
    #"Removed Columns1" = Table.RemoveColumns(#"Removed Columns",{"display_login"})
in
    #"Removed Columns1"

/*
* patrick-powell
*/
let
    Source = Json.Document(Web.Contents(#"p-patrickpowell")),
    #"Converted to Table" = Table.FromList(Source, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
    #"Expanded Column1" = Table.ExpandRecordColumn(#"Converted to Table", "Column1", {"id", "type", "actor", "repo", "payload", "public", "created_at"}, {"id", "type", "actor", "repo", "payload", "public", "created_at"}),
    #"Expanded actor" = Table.ExpandRecordColumn(#"Expanded Column1", "actor", {"login"}, {"login"}),
    #"Expanded payload" = Table.ExpandRecordColumn(#"Expanded actor", "payload", {"push_id", "size", "distinct_size", "ref", "head", "before", "commits"}, {"payload.push_id", "payload.size", "payload.distinct_size", "payload.ref", "payload.head", "payload.before", "payload.commits"}),
    #"Expanded payload.commits" = Table.ExpandListColumn(#"Expanded payload", "payload.commits"),
    #"Expanded payload.commits1" = Table.ExpandRecordColumn(#"Expanded payload.commits", "payload.commits", {"sha", "author", "message", "distinct", "url"}, {"payload.commits.sha", "payload.commits.author", "payload.commits.message", "payload.commits.distinct", "payload.commits.url"}),
    #"Expanded payload.commits.author" = Table.ExpandRecordColumn(#"Expanded payload.commits1", "payload.commits.author", {"name"}, {"name"}),
    #"Changed Type" = Table.TransformColumnTypes(#"Expanded payload.commits.author",{{"created_at", type datetime}, {"public", type text}, {"payload.commits.url", type text}, {"payload.commits.distinct", type logical}, {"payload.commits.message", type text}, {"name", type text}, {"payload.commits.sha", type text}, {"payload.before", type text}, {"payload.head", type text}, {"payload.ref", type text}, {"payload.distinct_size", Int64.Type}, {"payload.size", Int64.Type}, {"payload.push_id", type text}, {"login", type text}, {"type", type text}, {"id", type text}}),
    #"Removed Columns" = Table.RemoveColumns(#"Changed Type",{"repo"}),
    #"Duplicated Column" = Table.DuplicateColumn(#"Removed Columns", "created_at", "created_at - Copy"),
    #"Changed Type1" = Table.TransformColumnTypes(#"Duplicated Column",{{"created_at - Copy", type date}}),
    #"Duplicated Column1" = Table.DuplicateColumn(#"Changed Type1", "created_at", "created_at - Copy.1"),
    #"Changed Type2" = Table.TransformColumnTypes(#"Duplicated Column1",{{"created_at - Copy.1", type time}}),
    #"Renamed Columns" = Table.RenameColumns(#"Changed Type2",{{"created_at - Copy.1", "createdTime"}, {"created_at - Copy", "createdDate"}})
in
    #"Renamed Columns"

/*
* dates
*/
let
    Source = #date(2018,1,1),
    Custom2 = List.Dates(Source, Number.From(DateTime.LocalNow())- Number.From(Source) ,#duration(1,0,0,0)),
    #"Converted to Table" = Table.FromList(Custom2, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
    #"Renamed Columns" = Table.RenameColumns(#"Converted to Table",{{"Column1", "date"}}),
    #"Changed Type" = Table.TransformColumnTypes(#"Renamed Columns",{{"date", type date}}),
    #"Duplicated Column" = Table.DuplicateColumn(#"Changed Type", "date", "date - Copy"),
    #"Duplicated Column1" = Table.DuplicateColumn(#"Duplicated Column", "date", "date - Copy.1"),
    #"Duplicated Column2" = Table.DuplicateColumn(#"Duplicated Column1", "date", "date - Copy.2"),
    #"Duplicated Column3" = Table.DuplicateColumn(#"Duplicated Column2", "date", "date - Copy.3"),
    #"Duplicated Column4" = Table.DuplicateColumn(#"Duplicated Column3", "date", "date - Copy.4"),
    #"Renamed Columns1" = Table.RenameColumns(#"Duplicated Column4",{{"date - Copy", "year"}, {"date - Copy.1", "month"}, {"date - Copy.2", "day"}, {"date - Copy.3", "quarter"}, {"date - Copy.4", "week"}}),
    #"Extracted Year" = Table.TransformColumns(#"Renamed Columns1",{{"year", Date.Year, Int64.Type}}),
    #"Extracted Month" = Table.TransformColumns(#"Extracted Year",{{"month", Date.Month, Int64.Type}}),
    #"Extracted Day" = Table.TransformColumns(#"Extracted Month",{{"day", Date.Day, Int64.Type}}),
    #"Calculated Quarter" = Table.TransformColumns(#"Extracted Day",{{"quarter", Date.QuarterOfYear, Int64.Type}}),
    #"Calculated Week of Year" = Table.TransformColumns(#"Calculated Quarter",{{"week", Date.WeekOfYear, Int64.Type}})
in
    #"Calculated Week of Year"
