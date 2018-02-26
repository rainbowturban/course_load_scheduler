package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveCreateAccountAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveCreateAccountEventHandler;

import com.google.gwt.user.client.ui.HasWidgets;

public class ReceiveCreateAccountEvent extends DisplayEvent<ReceiveCreateAccountAction, ReceiveCreateAccountEventHandler>
{
	public static Type<ReceiveCreateAccountEventHandler> TYPE = new Type<ReceiveCreateAccountEventHandler>();
	
	public ReceiveCreateAccountEvent(ReceiveCreateAccountAction action, HasWidgets container)
	{
		super(action, container);
	}
	
	@Override
	public Type<ReceiveCreateAccountEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(ReceiveCreateAccountEventHandler handler)
	{
		handler.onReceiveCreateAccount(this);
	}
}
