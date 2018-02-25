package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveUpdateStatusRequestAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveUpdateStatusRequestEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class ReceiveUpdateStatusRequestEvent extends GwtEvent<ReceiveUpdateStatusRequestEventHandler>{
	public static Type<ReceiveUpdateStatusRequestEventHandler> TYPE = new Type<ReceiveUpdateStatusRequestEventHandler>();
	
	private ReceiveUpdateStatusRequestAction action;
	
	public ReceiveUpdateStatusRequestEvent(ReceiveUpdateStatusRequestAction action)
	{
		this.action = action;
	}
	
	public ReceiveUpdateStatusRequestAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveUpdateStatusRequestEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveUpdateStatusRequestEventHandler handler)
	{
		handler.onReceiveUpdateStatusRequest(this);
	}
}
