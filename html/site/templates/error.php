<!DOCTYPE html>
<html lang="<?= $kirby->languageCode() ?? 'en' ?>">
<?= snippet('head') ?>

<body>
	<h1><?= $page->title() ?></h1>
	<?= $page->text() ?>
	<p></p>
</body>

</html>
