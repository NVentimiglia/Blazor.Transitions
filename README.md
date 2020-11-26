# Blazor.Transitions
Blazor Transition Example

Experiment on how to handle intro/outro/update animations for Blazor components. Solution is a Blazor componenet with an IsVisible property. It listens to property changes and renders a div with an appropriate css class.

Supports 5 animations :
- Intro (fade in)
- Outro (fade out)
- Update (yellow blink)
- Intro Complete (snap to opacity 1)
- Outro Complete (snap to opacity 0)

Uses this library for animation tweens
https://github.com/daneden/animate.css

![Alt Text](https://raw.githubusercontent.com/NVentimiglia/Blazor.Transitions/master/Example.gif)

```javascript
@page "/counter"
@using BlazorApp1.Shared;

<Transition IsVisible="@IsVisible">
    <h1>Counter</h1>

    <p>Current count: @currentCount</p>

    <button class="btn btn-primary" @onclick="IncrementCount">Click me</button>
</Transition>

<button class="btn btn-danger" @onclick="ShowHide">Toggle</button>

@code {
    private int currentCount = 0;

    public bool IsVisible { get; set; } = true;

    private void IncrementCount()
    {
        currentCount++;
    }

    private void ShowHide()
    {
        IsVisible = !IsVisible;
    }
}

```

```javascript

<Transition IsVisible="forecasts.Length == 0" Class="fast">
    <p><em>Loading...</em></p>
</Transition>
<Transition IsVisible="forecasts.Length > 0" Class="delay-500ms">
    <table class="table animateList">
        <thead>
            <tr>
                <th>Date</th>
                <th>Temp. (C)</th>
                <th>Temp. (F)</th>
                <th>Summary</th>
            </tr>
        </thead>
        <tbody>
            @foreach (var forecast in forecasts)
            {
                <tr>
                    <td>@forecast.Date.ToShortDateString()</td>
                    <td>@forecast.TemperatureC</td>
                    <td>@forecast.TemperatureF</td>
                    <td>@forecast.Summary</td>
                </tr>
            }
        </tbody>
    </table>
</Transition>
```

Don't forget to copy the necessary files to /wwwroot/css and update index.html to link the js and css files.

```javascript
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Blazor.Transitions.Example</title>
    <base href="/" />
    <link href="css/bootstrap/bootstrap.min.css" rel="stylesheet" />
    <link href="css/app.css" rel="stylesheet" />
    <link href="Blazor.Transitions.Example.styles.css" rel="stylesheet" />
    <link href="manifest.json" rel="manifest" />
    <link rel="apple-touch-icon" sizes="512x512" href="icon-512.png" />

    <link href="css/animate.css/animate.min.css" rel="stylesheet" />
    <link href="css/transitions/transitions.css" rel="stylesheet" />
</head>

<body>
    <div id="app">Loading...</div>

    <div id="blazor-error-ui">
        An unhandled error has occurred.
        <a href="" class="reload">Reload</a>
        <a class="dismiss">🗙</a>
    </div>
    <script src="_framework/blazor.webassembly.js"></script>
    <script>navigator.serviceWorker.register('service-worker.js');</script>
    <script src="css/transitions/transitions.js"></script>

</body>

</html>
```