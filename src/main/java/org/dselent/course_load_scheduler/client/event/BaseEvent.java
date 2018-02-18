package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.Action;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.GwtEvent;

public abstract class BaseEvent<A extends Action, E extends EventHandler> extends GwtEvent<E>
{
	private A action;
	
	public BaseEvent(A action)
	{
		this.action = action;
	}
	
	public A getAction()
	{
		return action;
	}

}