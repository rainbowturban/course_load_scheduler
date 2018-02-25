package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendGetCourseListAction;
import org.dselent.course_load_scheduler.client.event_handler.SendGetCourseListEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendGetCourseListEvent extends GwtEvent<SendGetCourseListEventHandler>{
	public static Type<SendGetCourseListEventHandler> TYPE = new Type<SendGetCourseListEventHandler>();
	
	private SendGetCourseListAction action;
	
	public SendGetCourseListEvent(SendGetCourseListAction action)
	{
		this.action = action;
	}
	
	public SendGetCourseListAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<SendGetCourseListEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(SendGetCourseListEventHandler handler)
	{
		handler.onSendGetCourseList(this);
	}

}
