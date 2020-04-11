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
@page "/fetchdata"
@inject HttpClient Http

<h1>Weather forecast</h1>

<p>This component demonstrates fetching data from the server.</p>

<Transition IsVisible="forecasts == null" Class="fast">
    <p><em>Loading...</em></p>
</Transition>
@if (forecasts != null)
{
    <Transition ShowIntro="true" Class="delay-500mss">
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
}
```