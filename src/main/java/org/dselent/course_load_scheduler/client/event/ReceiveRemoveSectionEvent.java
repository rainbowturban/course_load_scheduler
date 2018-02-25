package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveRemoveSectionAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveRemoveSectionEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveRemoveSectionEvent extends GwtEvent<ReceiveRemoveSectionEventHandler>{
	public static Type<ReceiveRemoveSectionEventHandler> TYPE = new Type<ReceiveRemoveSectionEventHandler>();
	
	private ReceiveRemoveSectionAction action;
	
	public ReceiveRemoveSectionEvent(ReceiveRemoveSectionAction action)
	{
		this.action = action;
	}
	
	public ReceiveRemoveSectionAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveRemoveSectionEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveRemoveSectionEventHandler handler)
	{
		handler.onReceiveRemoveSection(this);
	}
}
