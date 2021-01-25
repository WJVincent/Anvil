# Table of Contents

1.  [Users](#org6d25b1a)
2.  [Folders](#org23e88de)
3.  [Categories](#org90e5a87)
4.  [Files](#orgdc7c037)
5.  [FileTypes](#org450604c)
6.  [Tags](#orgbbe7290)
7.  [FileTags](#orgf59298c)

![anvil-db-schema](https://user-images.githubusercontent.com/48498224/105748702-7e6b2a80-5f10-11eb-8635-78bc14922465.png)


<a id="org6d25b1a"></a>

# Users

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Datatype</th>
<th scope="col" class="org-left">Details</th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">id</td>
<td class="org-left">int</td>
<td class="org-left">not null, pk</td>
</tr>

<tr>
<td class="org-left">username</td>
<td class="org-left">string(30)</td>
<td class="org-left">not null,unique</td>
</tr>

<tr>
<td class="org-left">email</td>
<td class="org-left">string(50)</td>
<td class="org-left">not null, unique</td>
</tr>

<tr>
<td class="org-left">password</td>
<td class="org-left">string.binary</td>
<td class="org-left">not null</td>
</tr>
</tbody>
</table>

<br />

- Sequelize hasMany Folders association.

<a id="org23e88de"></a>

# Folders

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Datatype</th>
<th scope="col" class="org-left">Details</th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">id</td>
<td class="org-left">integer</td>
<td class="org-left">not null, pk</td>
</tr>

<tr>
<td class="org-left">name</td>
<td class="org-left">string(50)</td>
<td class="org-left">not null,</td>
</tr>

<tr>
<td class="org-left">userId</td>
<td class="org-left">integer</td>
<td class="org-left">not null, fk</td>
</tr>

<tr>
<td class="org-left">categoryId</td>
<td class="org-left">integer</td>
<td class="org-left">not null, fk</td>
</tr>
</tbody>
</table>

<br />

- Sequelize belongsTo User association.
- Sequelize belongsTo Category association.

<a id="org90e5a87"></a>

# Categories

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Datatype</th>
<th scope="col" class="org-left">Details</th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">id</td>
<td class="org-left">integer</td>
<td class="org-left">not null, pk</td>
</tr>

<tr>
<td class="org-left">name</td>
<td class="org-left">string(20)</td>
<td class="org-left">not null, unique</td>
</tr>
</tbody>
</table>

<br />

- Sequelize hasMany Folders association.

<a id="orgdc7c037"></a>

# Files

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Datatype</th>
<th scope="col" class="org-left">Details</th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">id</td>
<td class="org-left">integer</td>
<td class="org-left">not null, pk</td>
</tr>

<tr>
<td class="org-left">name</td>
<td class="org-left">string(50)</td>
<td class="org-left">not null</td>
</tr>

<tr>
<td class="org-left">url</td>
<td class="org-left">string(200)</td>
<td class="org-left">not null</td>
</tr>

<tr>
<td class="org-left">folderId</td>
<td class="org-left">integer</td>
<td class="org-left">not null, fk</td>
</tr>

<tr>
<td class="org-left">fileTypeId</td>
<td class="org-left">integer</td>
<td class="org-left">not null, fk</td>
</tr>
</tbody>
</table>

<br />

- Sequelize belongsTo Folders association.
- Sequelize belongsTo FileTypes association.
- Sequelize belongsToMany Tags through FileTags association.

# FileTypes

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Datatype</th>
<th scope="col" class="org-left">Details</th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">id</td>
<td class="org-left">integer</td>
<td class="org-left">not null, pk</td>
</tr>

<tr>
<td class="org-left">name</td>
<td class="org-left">string(5)</td>
<td class="org-left">not null, unique</td>
</tr>
</tbody>
</table>

<br />

- Sequelize hasMany Files association.

<a id="orgbbe7290"></a>

# Tags

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Datatype</th>
<th scope="col" class="org-left">Details</th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">id</td>
<td class="org-left">integer</td>
<td class="org-left">not null, pk</td>
</tr>

<tr>
<td class="org-left">name</td>
<td class="org-left">string(20)</td>
<td class="org-left">not null, unique</td>
</tr>
</tbody>
</table>

<br />

- Sequelize belongsToMany Files through FileTags association.

<a id="orgf59298c"></a>

# FileTags

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Datatype</th>
<th scope="col" class="org-left">Details</th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">id</td>
<td class="org-left">integer</td>
<td class="org-left">not null, pk</td>
</tr>

<tr>
<td class="org-left">fileId</td>
<td class="org-left">integer</td>
<td class="org-left">not null, fk</td>
</tr>

<tr>
<td class="org-left">tagId</td>
<td class="org-left">integer</td>
<td class="org-left">not null, fk</td>
</tr>
</tbody>
</table>

<br />

- Sequelize joins association with Tags and Files tables.
