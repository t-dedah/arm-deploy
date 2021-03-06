**Releasing a new version**

Semanting versioning is used to release different versions of the action. Following steps are to be followed :

1. Create a new branch for every major version. \
Example, releases/v1, releases/v2.
2. For every minor and patch release for a major version, update the corresponding release branch. \
Example, for releasing v1.1.1, update releases/v1.
3. Create tags for every new release (major/minor/patch). \
Example,v1.0.0. , v1.0.1, v2.0.1, etc. and also have tags like v1, v2 for every major version release.
4. On releasing minor and patch versions, update the tag of the corresponding major version. \
Example, for releasing v1.0.1, update the v1 tag to point to the ref of the current release. \
The following commands are to be run on the release\v1 branch so that it picks the latest commit and updates the v1 tag accordingly :
(Ensure that you are on same commit locally as you want to release.)
* `git tag -fa v1 -m "Update v1 tag"`
* `git push origin v1 --force`
