package org.dselent.course_load_scheduler.client.callback;

import java.util.Iterator;
import java.util.Set;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.user.client.ui.HasWidgets;

public abstract class DisplayCallback<JSONValue> extends Callback<JSONValue>
{
	private HasWidgets container;

	public DisplayCallback(SimpleEventBus eventBus, HasWidgets container)
	{
		super(eventBus);
		this.container = container;
	}
	
	public void bind() {};

	public void unbind()
	{
		Set<GwtEvent.Type<?>> eventTypes = eventBusRegistration.keySet();
		Iterator<GwtEvent.Type<?>> iterator = eventTypes.iterator();
		
		while(iterator.hasNext())
		{
			eventBusRegistration.get(iterator.next()).removeHandler();
		}
	}
	
	public HasWidgets getContainer()
	{
		return container;
	}
}