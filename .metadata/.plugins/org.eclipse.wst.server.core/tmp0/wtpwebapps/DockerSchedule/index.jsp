<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<title>Docker Schedule</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/mycss.css">
<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css"
	rel="stylesheet">
<link
	href="http://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
	rel="stylesheet">

</head>

<body>

	<div class="jumbotron vertical-center">

		<div class="container container-fluid2">


			<form class="row" role="form" on sub>
				<h2 align="center">Docker Schedule Status Preemptive Scheduling</h2>
				<div class="form-group col-xs-12 col-sm-4 col-md-3">
					<label for="sel1">Select Policy:</label>

				</div>
				<div class="form-group col-xs-12 col-sm-4 col-md-6 ui-widget">
					<select class="form-control" id="pol">
						<option value="fcfs">FCFS</option>
						<option value="rr">ROUND ROBIN</option>
						<option value="rm">RANDOM</option>

						<option value="sjf">SHORTEST JOB FIRST</option>
					</select>
				</div>
				<div class="form-group col-xs-12 col-sm-4 col-md-3">

					<input id="noContainers" required
						placeholder="Max No of Containers" />

				</div>
				<button type="submit" class="btn btn-primary" id="setpolicy">
					Set Policy</button>
				<button class="btn btn-primary" id="stop">Stop Policy</button>
			</form>


		</div>
		<hr style.color="white">


		<div class="container container-fluid2">
			<table class="table table-striped" id="favorites">

				<tr>
									<td nowrap>Docker ID</td>
				
					<td nowrap>Docker Name</td>
					<td nowrap>Status</td>

				</tr>

			</table>
		</div>

	</div>
	<script src="http://code.jquery.com/jquery.min.js"></script>

	<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
	<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
	<script src="js/stocks.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="http://momentjs.com/downloads/moment.min.js"></script>
	<script
		src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
</body>

</html>